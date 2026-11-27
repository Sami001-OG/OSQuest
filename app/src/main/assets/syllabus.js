const syllabusTopics = syllabusUnits.flatMap(unit => unit.topics);
state.syllabusRecalled = Array.isArray(state.syllabusRecalled) ? state.syllabusRecalled : [];

function syllabusRecallCount(topics) {
  return topics.filter(topic => state.syllabusRecalled.includes(topic.id)).length;
}

function auditPage() {
  const recalled = syllabusRecallCount(syllabusTopics);
  const nextUnit = syllabusUnits.find(unit => unit.topics.some(topic => !state.syllabusRecalled.includes(topic.id)));
  const nextTopic = nextUnit?.topics.find(topic => !state.syllabusRecalled.includes(topic.id));
  const resume = nextTopic
    ? btn("syllabusTopic('" + nextUnit.id + "','" + nextTopic.id + "')",
        (recalled ? 'Continue with ' : 'Start with ') + esc(nextTopic.title), 'primary full')
    : '';
  page(
    back('home()', 'Learn') +
    header('Complete syllabus', 'Operating System · 530205 · 80 marks · 3 credits · 45 class hours') +
    '<section class="hero"><h2>Your syllabus progress</h2><p>' + recalled + ' of ' + syllabusTopics.length +
    ' topics recalled across ' + syllabusUnits.length + ' units.</p>' +
    '<progress aria-label="Syllabus recall progress" value="' + recalled + '" max="' + syllabusTopics.length +
    '"></progress><p>Start with the simple definition and example. Open the exam definition to practise the wording, then try the recall question.</p>' +
    resume + '</section>' +
    syllabusUnits.map(unit => {
      const done = syllabusRecallCount(unit.topics);
      return card("syllabusUnit('" + unit.id + "')", done === unit.topics.length ? 'check' : 'book',
        unit.title, done + '/' + unit.topics.length + ' recalled');
    }).join('') +
    '<section><h2>Course references</h2><p>Topic order follows the supplied syllabus, page 4 of 8. ' +
    'Prescribed books are Modern Operating Systems by Andrew S. Tanenbaum and Operating System Concepts by ' +
    'Abraham Silberschatz, Peter Baer Galvin and Greg Gagne.</p></section>', 0
  );
}

function syllabusUnit(unitId) {
  const unit = syllabusUnits.find(item => item.id === unitId);
  if (!unit) return auditPage();

  const recalled = syllabusRecallCount(unit.topics);
  page(
    back('auditPage()', 'Complete syllabus') +
    header(unit.title, recalled + ' of ' + unit.topics.length + ' topics recalled') +
    unit.topics.map(topic => {
      const done = state.syllabusRecalled.includes(topic.id);
      return card("syllabusTopic('" + unit.id + "','" + topic.id + "')", done ? 'check' : 'book',
        topic.title, done ? 'Recalled · revisit' : 'Definition, example and recall question');
    }).join(''), 0
  );
}

function syllabusTopic(unitId, topicId) {
  const unit = syllabusUnits.find(item => item.id === unitId);
  if (!unit) return auditPage();
  const index = unit.topics.findIndex(item => item.id === topicId);
  if (index < 0) return syllabusUnit(unitId);

  const topic = unit.topics[index];
  const done = state.syllabusRecalled.includes(topic.id);
  const next = unit.topics[index + 1];
  const nextUnit = syllabusUnits[syllabusUnits.indexOf(unit) + 1];
  const unitPage = "syllabusUnit('" + unit.id + "')";
  const onward = next
    ? btn("syllabusTopic('" + unit.id + "','" + next.id + "')", 'Next topic →', 'primary')
    : nextUnit
      ? btn("syllabusUnit('" + nextUnit.id + "')", 'Next unit →', 'primary')
      : btn('auditPage()', 'Review syllabus progress', 'primary');
  const returnTo = "syllabusTopic('" + unit.id + "','" + topic.id + "')";
  page(
    back(unitPage, unit.title) +
    header(topic.title, 'Topic ' + (index + 1) + ' of ' + unit.topics.length + ' · ' + unit.title) +
    '<section class="reader-block"><h2>In simple words</h2><p>' + esc(topic.definition) + '</p>' +
    '<div class="syllabus-explanation"><h2>How it works</h2><p>' + esc(topic.explanation) + '</p>' +
    '</div><div class="syllabus-explanation"><h2>Example</h2><p class="worked">' + esc(topic.example) +
    '</p></div><details><summary>Exam definition</summary><p>' + esc(topic.examDefinition) +
    '</p></details></section>' +
    '<section class="reader-block"><h2>Check your recall</h2><p>' + esc(topic.question) + '</p>' +
    '<details><summary>Reveal model answer</summary><p>' + esc(topic.answer) + '</p>' +
    '<button class="full" id="syllabus-recall" aria-pressed="' + done + '" onclick="toggleSyllabusRecall(\'' +
    topic.id + '\')">' + (done ? 'Recalled ✓' : 'I recalled this') + '</button></details></section>' +
    '<div class="actions">' + onward + '</div>' +
    '<div class="section-head"><h2>Related lessons and practice</h2></div>' +
    topic.lessons.map(id => {
      const related = lessons.find(item => item.id === id);
      return card("lesson('" + id + "',&quot;" + returnTo + "&quot;)", 'book', related.title,
        'Open lesson, glossary and written practice');
    }).join(''), 0, true
  );
}

function toggleSyllabusRecall(topicId) {
  const done = !state.syllabusRecalled.includes(topicId);
  state.syllabusRecalled = done
    ? [...state.syllabusRecalled, topicId]
    : state.syllabusRecalled.filter(id => id !== topicId);
  save();

  const button = $('syllabus-recall');
  button.setAttribute('aria-pressed', String(done));
  button.textContent = done ? 'Recalled ✓' : 'I recalled this';
}
