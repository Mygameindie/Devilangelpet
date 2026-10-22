// ===========================================================
// 🎛️ GAME CONFIG — this file is PER-GAME (safe to edit here).
// The engine/ folder is SHARED between games: never edit it in
// only one repo — edit it once, then run ./sync_engine.sh
//
// pets: one entry per character.
//   artSuffix : filename suffix for this pet's art.
//               "" -> base.png, "_2" -> base_2.png, etc.
//               If a pet's art is missing, the engine falls back
//               to pet 1's art and applies drawFilter (a CSS
//               filter tint) so the pet still looks different.
//   xFrac     : horizontal start position, 0..1 of screen width.
//   drawFilter: CSS filter used when this pet falls back to
//               pet 1's art ("none" for no tint).
//   noParts   : (optional) ragdoll part names this character never has
//               (e.g. ["chest_L", "chest_R"]); they are not drawn at all.
//
// posesFromHeads: true = there are no whole-body pictures (base.png,
//   base_sick.png, base_happy.png ...). Every pose is the body built from
//   images/parts/ plus that pose's head (head_sick.png, head_happy.png ...).
//
// Character 1 is the GIRL (plain art names), character 2 is the BOY
// (the same names with "_2": base_2.png, top1_2.png, parts/head_2.png ...).
// ===========================================================
window.GAME_CONFIG = {
  saveKey: "purelilypet_save",
  posesFromHeads: true,
  pets: [
    { artSuffix: "",   xFrac: 0.35, drawFilter: "none" },
    // noParts: ragdoll parts this character never has (the boy has no chest),
    // even when character 1's picture is borrowed because his own is missing.
    { artSuffix: "_2", xFrac: 0.65, drawFilter: "hue-rotate(140deg) saturate(1.2)", noParts: ["chest_L", "chest_R"] },
  ],
};
