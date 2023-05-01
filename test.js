var parts = {
  "가슴":['Peck deck chest fly', 'Bench Press', 'Machine incline bench press'],
  "팔":['Arm curl', 'Hammer curl', 'Biceps curl', 'Assisted dip', 'Lying triceps extension', 'Seated dip', 'Cable tricep extension'],
  "등":['Lat pulldown', 'Machine seated row', 'Seated low row', 'Assisted Pull-up machine', 'Rear deltoid'],
  "하체":['Seated leg press', 'Leg curl'],
  "어깨":['Shoulder press', 'Standing side lateral raise'],
  "전신":['Abdominal crunch', 'Smith machine'],
  "테스트":['테스트운동1']
}
var $ul = document.createElement('ul');
for (var part in parts) {
  if (parts.hasOwnProperty(part)) {
    var exercises = parts[part];
    var $li = document.createElement('li');
    $li.innerText = part + ": " + exercises.join(", ");
    $ul.appendChild($li);
  }
}
document.getElementById("test").appendChild($ul);
