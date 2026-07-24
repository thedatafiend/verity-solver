(function () {
  "use strict";

  // ---- Shape model -------------------------------------------------------
  var TWO_D = ["circle", "square", "triangle"];
  var TWO_D_LABEL = { circle: "Circle", square: "Square", triangle: "Triangle" };

  // 3D name <-> sorted pair of 2D components
  var THREE_D = {
    Sphere:   ["circle", "circle"],
    Cube:     ["square", "square"],
    Pyramid:  ["triangle", "triangle"],
    Cone:     ["circle", "triangle"],
    Cylinder: ["circle", "square"],
    Prism:    ["square", "triangle"]
  };
  var THREE_D_ORDER = ["Sphere", "Cube", "Pyramid", "Cone", "Cylinder", "Prism"];

  function sortPair(a, b) { return [a, b].sort(); }
  function pairKey(pair) { return pair.slice().sort().join(","); }

  var NAME_BY_KEY = {};
  Object.keys(THREE_D).forEach(function (name) {
    NAME_BY_KEY[pairKey(THREE_D[name])] = name;
  });
  function nameOfPair(pair) { return NAME_BY_KEY[pairKey(pair)]; }

  // ---- SVG icons ---------------------------------------------------------
  function icon2d(shape) {
    if (shape === "circle") return '<svg viewBox="0 0 40 40"><circle class="shape-stroke" cx="20" cy="20" r="14"/></svg>';
    if (shape === "square") return '<svg viewBox="0 0 40 40"><rect class="shape-stroke" x="7" y="7" width="26" height="26" rx="2"/></svg>';
    return '<svg viewBox="0 0 40 40"><path class="shape-stroke" stroke-linejoin="round" d="M20 6 L34 32 L6 32 Z"/></svg>';
  }
  function miniPair(pair) {
    return '<span class="shape-mini">' + icon2d(pair[0]) + icon2d(pair[1]) + '</span>';
  }

  // ---- Build inputs ------------------------------------------------------
  var POSITIONS = ["Left", "Middle", "Right"];
  var inside = [null, null, null];   // 2D shapes
  var outside = [null, null, null];  // 3D names

  function buildInsideInputs() {
    var root = document.getElementById("insideInputs");
    root.innerHTML = "";
    POSITIONS.forEach(function (pos, i) {
      var slot = document.createElement("div");
      slot.className = "slot";
      var html = '<div class="pos">' + pos + '</div><div class="opts">';
      TWO_D.forEach(function (sh) {
        html += '<button class="opt" data-kind="inside" data-idx="' + i + '" data-val="' + sh + '">' +
          icon2d(sh) + '<span class="lbl">' + TWO_D_LABEL[sh] + '</span></button>';
      });
      html += '</div>';
      slot.innerHTML = html;
      root.appendChild(slot);
    });
  }

  function buildOutsideInputs() {
    var root = document.getElementById("outsideInputs");
    root.innerHTML = "";
    POSITIONS.forEach(function (pos, i) {
      var slot = document.createElement("div");
      slot.className = "slot";
      var html = '<div class="pos">' + pos + '</div><div class="opts six">';
      THREE_D_ORDER.forEach(function (name) {
        html += '<button class="opt" data-kind="outside" data-idx="' + i + '" data-val="' + name + '">' +
          miniPair(THREE_D[name]) + '<span class="lbl">' + name + '</span></button>';
      });
      html += '</div>';
      slot.innerHTML = html;
      root.appendChild(slot);
    });
  }

  function onOptClick(e) {
    var btn = e.target.closest(".opt");
    if (!btn) return;
    var kind = btn.getAttribute("data-kind");
    var idx = parseInt(btn.getAttribute("data-idx"), 10);
    var val = btn.getAttribute("data-val");
    if (kind === "inside") inside[idx] = val; else outside[idx] = val;
    // update selected styling within this slot
    var slot = btn.closest(".slot");
    slot.querySelectorAll(".opt").forEach(function (o) { o.classList.remove("sel"); });
    btn.classList.add("sel");
  }

  // ---- Outside solver: BFS over component swaps --------------------------
  // state: array of 3 sorted pairs. move: swap one component between two statues.
  function stateKey(state) {
    return state.map(function (p) { return p.join(""); }).join("|");
  }
  function multisetKey(state) {
    var all = [];
    state.forEach(function (p) { all.push(p[0], p[1]); });
    return all.sort().join(",");
  }

  function solveOutside(startPairs, goalPairs) {
    var goalKey = stateKey(goalPairs.map(function (p) { return p.slice().sort(); }));
    var start = startPairs.map(function (p) { return p.slice().sort(); });

    if (stateKey(start) === goalKey) return { steps: [], solved: true };

    // reachability guard: swaps conserve the total 2D multiset
    if (multisetKey(start) !== multisetKey(goalPairs)) {
      return { steps: null, solved: false, unreachable: true };
    }

    var visited = {};
    visited[stateKey(start)] = true;
    var queue = [{ state: start, path: [] }];

    while (queue.length) {
      var cur = queue.shift();
      var s = cur.state;
      // generate moves: pick 2 statues i<j, pick a component from each, swap
      for (var i = 0; i < 3; i++) {
        for (var j = i + 1; j < 3; j++) {
          for (var ci = 0; ci < 2; ci++) {
            for (var cj = 0; cj < 2; cj++) {
              var ti = s[i][ci], tj = s[j][cj];
              if (ti === tj) continue; // no-op swap
              var ns = [s[0].slice(), s[1].slice(), s[2].slice()];
              ns[i][ci] = tj; ns[j][cj] = ti;
              ns[i] = ns[i].sort(); ns[j] = ns[j].sort();
              var k = stateKey(ns);
              if (visited[k]) continue;
              var move = { i: i, j: j, giveI: ti, giveJ: tj, after: [ns[0].slice(), ns[1].slice(), ns[2].slice()] };
              var np = cur.path.concat([move]);
              if (k === goalKey) return { steps: np, solved: true };
              visited[k] = true;
              queue.push({ state: ns, path: np });
            }
          }
        }
      }
    }
    return { steps: null, solved: false, unreachable: true };
  }

  // ---- Render solution ---------------------------------------------------
  function shapeInline2d(sh) { return '<span class="shape-mini">' + icon2d(sh) + '</span> ' + TWO_D_LABEL[sh]; }

  function otherTwo(i) {
    var out = [];
    for (var k = 0; k < 3; k++) if (k !== i) out.push(inside[k]);
    return out;
  }

  function render() {
    // validate inputs
    for (var i = 0; i < 3; i++) {
      if (!inside[i]) { alert("Pick the inside shape for " + POSITIONS[i] + "."); return; }
      if (!outside[i]) { alert("Pick the outside statue shape for " + POSITIONS[i] + "."); return; }
    }

    var warn = document.getElementById("warnBox");
    warn.innerHTML = "";

    // ---- Inside solution
    var insEl = document.getElementById("insideSolution");
    insEl.innerHTML = "";
    for (var p = 0; p < 3; p++) {
      var others = otherTwo(p);
      var targetPair = sortPair(others[0], others[1]);
      var targetName = nameOfPair(targetPair);
      var receivers = POSITIONS.filter(function (_, k) { return k !== p; }).join(" & ");
      var row = document.createElement("div");
      row.className = "solverow";
      row.innerHTML =
        '<span class="pill">' + POSITIONS[p] + '</span>' +
        '<div class="body">' +
          '<div class="big">Build <span class="name3d">' + targetName + '</span> ' + miniPair(targetPair) + '</div>' +
          '<div class="sub">You are ' + shapeInline2d(inside[p]) + '. Send your ' + TWO_D_LABEL[inside[p]] +
            ' to <b>' + receivers + '</b>. You keep the ' + TWO_D_LABEL[others[0]] + ' + ' + TWO_D_LABEL[others[1]] + '.</div>' +
        '</div>';
      insEl.appendChild(row);
    }

    // ---- Outside targets
    var goalPairs = [];
    for (var q = 0; q < 3; q++) {
      var oth = otherTwo(q);
      goalPairs.push(sortPair(oth[0], oth[1]));
    }
    var tgEl = document.getElementById("outsideTargets");
    tgEl.innerHTML = "";
    for (var t = 0; t < 3; t++) {
      var gName = nameOfPair(goalPairs[t]);
      var curName = outside[t];
      var same = (curName === gName);
      var row2 = document.createElement("div");
      row2.className = "solverow";
      row2.innerHTML =
        '<span class="pill">' + POSITIONS[t] + '</span>' +
        '<div class="body">' +
          '<div class="big">' + (same ? '<span class="success">✓ already </span>' : 'Make ') +
            '<span class="name3d">' + gName + '</span> ' + miniPair(goalPairs[t]) + '</div>' +
          '<div class="sub">' + POSITIONS[t] + ' statue (inside ' + TWO_D_LABEL[inside[t]] +
            ') &mdash; currently ' + curName + ' ' + miniPair(THREE_D[curName]) + '</div>' +
        '</div>';
      tgEl.appendChild(row2);
    }

    // ---- Outside steps (BFS)
    var startPairs = outside.map(function (name) { return THREE_D[name].slice(); });
    var res = solveOutside(startPairs, goalPairs);

    var stepsEl = document.getElementById("outsideSteps");
    var countEl = document.getElementById("stepCount");
    stepsEl.innerHTML = "";

    if (res.unreachable) {
      warn.innerHTML = '<div class="warn"><b>Those shapes can\'t be reached by dissecting.</b> ' +
        'Dissection swaps never change the total pool of 2D shapes, but your outside statues hold a different ' +
        'set than the target needs. Double-check the outside statue shapes and the inside call-outs.</div>';
      countEl.textContent = "";
      return;
    }

    if (res.steps.length === 0) {
      countEl.textContent = "";
      stepsEl.innerHTML = '<li class="step" style="padding-left:52px;"><span class="success">Statues already match — no dunks needed.</span></li>';
    } else {
      countEl.textContent = res.steps.length + (res.steps.length === 1 ? " swap · " : " swaps · ") + (res.steps.length * 2) + " dunks";
      res.steps.forEach(function (m) {
        var li = document.createElement("li");
        li.className = "step";
        var pi = POSITIONS[m.i], pj = POSITIONS[m.j];
        var afterI = m.after[m.i], afterJ = m.after[m.j];
        li.innerHTML =
          '<span class="act">Dissect ' + shapeInline2d(m.giveI) + ' off <b>' + pi + '</b> ' +
            '<span class="arrow">→ dunk on</span> <b>' + pj + '</b></span>' +
          '<span class="act">Dissect ' + shapeInline2d(m.giveJ) + ' off <b>' + pj + '</b> ' +
            '<span class="arrow">→ dunk on</span> <b>' + pi + '</b></span>' +
          '<span class="res"><b>' + pi + '</b> → ' + '<span class="name3d">' + nameOfPair(afterI) + '</span> ' + miniPair(afterI) +
            ' &nbsp;·&nbsp; <b>' + pj + '</b> → ' + '<span class="name3d">' + nameOfPair(afterJ) + '</span> ' + miniPair(afterJ) + '</span>';
        stepsEl.appendChild(li);
      });
    }

    var result = document.getElementById("result");
    result.classList.add("show");
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---- Reset / example ---------------------------------------------------
  function reset() {
    inside = [null, null, null];
    outside = [null, null, null];
    document.querySelectorAll(".opt.sel").forEach(function (o) { o.classList.remove("sel"); });
    document.getElementById("result").classList.remove("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function select(kind, idx, val) {
    var sel = '.opt[data-kind="' + kind + '"][data-idx="' + idx + '"][data-val="' + val + '"]';
    var btn = document.querySelector(sel);
    if (btn) btn.click();
  }
  function loadExample() {
    reset();
    // Classic "rotation" case: inside all distinct, statues are the three pure doubles.
    select("inside", 0, "circle");
    select("inside", 1, "square");
    select("inside", 2, "triangle");
    select("outside", 0, "Sphere");
    select("outside", 1, "Cube");
    select("outside", 2, "Pyramid");
  }

  // ---- Wire up -----------------------------------------------------------
  buildInsideInputs();
  buildOutsideInputs();
  document.getElementById("insideInputs").addEventListener("click", onOptClick);
  document.getElementById("outsideInputs").addEventListener("click", onOptClick);
  document.getElementById("solveBtn").addEventListener("click", render);
  document.getElementById("resetBtn").addEventListener("click", reset);
  document.getElementById("exampleBtn").addEventListener("click", loadExample);
})();
