function getParameterByName(name, url) {
	if (!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return null;
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/*
 * Example JSON:
 {
 	"width": 500,
 	"height": 500,
 	"notePixelWidth": 400,
 	"staveWidth": 400,
 	"staveMargin": 10,
 	"staves": [
 		{
			"clef": "treble",
			"timeSig": "4/4",
			"notes": [
				{
					"letter": "c",
					"octave": 4,
					"duration": "q"
				},
				{
					"letter": "d",
					"octave": 4,
					"duration": "q"
				},
				{
					"letter": "b",
					"octave": 4,
					"duration": "qr"
				},
				{
					"letter": "g",
					"octave": 4,
					"duration": "q"
				}
			]
 		}
 	]
 }

 * Durations:
 * 32 = thirtysecond
 * 16 = sixteenth
 * 8 = eight
 * w = whole
 * q = quarter
 * h = half
 */

var jsonStr = getParameterByName("json");
console.log(jsonStr);
var json = JSON.parse(jsonStr);

VF = Vex.Flow;

var div = document.getElementById("container");
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

renderer.resize(json.width, json.height);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

var xPos = 10;
var yPos = 40;
json.staves.forEach(function(s) {
	var stave = new VF.Stave(xPos, yPos, json.staveWidth);
	yPos += json.staveMargin;
	console.log(s);
	stave.addClef(s.clef).addTimeSignature(s.timeSig);
	stave.setContext(context).draw();

	var notes = [];
	s.notes.forEach(function(n) {
		var vexNote = new VF.StaveNote({
			keys: [n.letter + "/" + n.octave],
			duration: n.duration
		});
		if (n.letter.length == 2 && (n.letter[1] == "#" || n.letter[1] == "b")) {
			vexNote.addAccidental(0, new VF.Accidental(n.letter[1]))
		}
		notes.push(vexNote);
	});

	var x = s.timeSig.split("/");
	var voice = new VF.Voice({
		num_beats: x[0],
		beat_value: x[0]
	});
	voice.addTickables(notes);

	var formatter = new VF.Formatter().joinVoices([voice]).format([voice], json.notePixelWidth);
	voice.draw(context, stave);
});