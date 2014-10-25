
var current_example = -1;

if (window.location.hash) {
  var hash = window.location.hash.substr(1);
  hash = Math.min(Math.max(1, parseInt(hash)),examples.length);
  current_example = Number.isNaN(hash) ? current_example : hash-2;
}

function showExample(exnum, target, expanded, normalized, n) {

  exnum.text(n+1);

  var example = examples[n];

  target.text(JSON.stringify(example, undefined, 2));

  jsonld.expand(example, function(e,r) {
    expanded.text(JSON.stringify(r, undefined, 2));
  });

  jsonld.normalize(example, {format: 'application/nquads'}, function(e,r) {
    normalized.text(r);
  });

  window.location.hash = current_example + 1;
}

function toggleButtons() {
  $('#prev').prop('disabled', current_example <= 0);
  $('#next').prop('disabled', current_example >= examples.length - 1);
}

function showNext() {
  showExample($('#exnum'), $('#example'), $('#expanded'), $('#normalized'), ++current_example);
  toggleButtons();
}

function showPrev() {
  showExample($('#exnum'), $('#example'), $('#expanded'), $('#normalized'), --current_example);
  toggleButtons();
}

$('#prev').click(showPrev);
$('#next').click(showNext);

$(document).keydown(function(e) {
  switch(e.which) {
    case 37:
      if (current_example > 0)
        showPrev();
      break;
    case 39:
      if (current_example < examples.length -1)
        showNext();
      break;
    case 38:
      if (e.shiftKey) {
        current_example = -1;
        showNext();
      }
      break;
    case 40:
      if (e.shiftKey) {
        current_example = (examples.length - 2);
        showNext();
      }
      break;
  }
});

showNext();