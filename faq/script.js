const questions = [{
  q: "Why does my file take a while to load?",
  a: "Every file you load must be read and processed by the Minionbot. The speed of its availability will depend on the size and complexity of the file.",
  id: "a"
}, {
  q: "What happens if I run out of allotted questions to the Minionbot?",
  a: "Your monthly maximum allotted questions will reset to Zero on the first of every month. In the event that you exceed your maximum amount of questions within a calendar month you will have the following options: If you are using a Premium account, you will be prompted to upgrade to the Professional account. You may toggle back to the Premium account the following month.",
  id: "b"
}, {
  q: "What file formats are supported?",
  a: "Currently, PDF and Microsoft Word file formats are supported. DATAMINION engineers will be adding other file formats in the future.",
  id: "c"
}, {
  q: "My file is too big for the Minionbot. What can I do?",
  a: "The Minionbot may have issues processing files that are densely packed with content. For example, if a college textbook is not loading properly, save as respective chapters as PDFs and load them individually.",
  id: "d"
}, {
  q: "When will new features be available?",
  a: "We are constantly developing new features. They will generally be implemented on a monthly basis.",
  id: "e"
}, {
  q: "How do I delete a file I have uploaded?",
  a: "While viewing in Grid mode: Click on the file. Click on the three dots at the top right of the file. Click remove. While viewing in List mode: Click on the three dots at the right of the file. Click remove.",
  id: "f"
}, {
  q: "Can I load more documents after I have uploaded the maximum amount of documents in my tier?",
  a: "Yes. Your maximum document uploads quota has to do with storage space. If you need to load more files, remove older files that you are not using to free up space.",
  id: "g"
}, {
  q: "Why is there a limited amount of questions per month?",
  a: "The language model has a finite amount of questions allotted per user. We expect this question limit to increase in the future and eventually become irrelevant to humans.",
  id: "h"
}, {
  q: "Is there a business plan available for my small business/ corporation?",
  a: "The Minionbot is evolving quickly. It will be available as a business plan in the future. In the meantime, we request that you use individual accounts.",
  id: "i"
}, {
  q: "What is an “Operational Beta”?",
  a: "In the tech world, a Beta is a software that is ready for external testing but has limitations in comparison to the final release. Although our Minionbot can use a little more time in the oven, it is functional. We at DATAMINION have chosen to make the beta version of the Minionbot available to students while it is on its last stages of development. This will allow our small startup company to finish adjusting Minionbot in the real world. All proceeds from the beta go to improving your experience with the Minionbot and feeding our little team of cranky humans.",
  id: "j"
}]

function resetQuery() {
  document.getElementById('search-tabs').classList.remove('hidden')
  document.getElementById('search-fail').classList.add('hidden')
  document.getElementById('search-label').classList.add('hidden')
  document.querySelectorAll('.toggle-t.flex').forEach(
    e => e.classList.add('hidden')
  )
  document.querySelectorAll('.group-a.flex').forEach(
    e => e.classList.remove('hidden')
  )
}

function checkString(input, query) {
  return input.q.toLowerCase().includes(query.toLowerCase())|| input.a.toLowerCase().includes(query.toLowerCase())
}

function handleInput(e) {
  if (e.target.value.length < 1) {
    resetQuery()
    return
  }
  document.getElementById('search-tabs').classList.add('hidden')
  questions.forEach(i => {
    if (checkString(i, e.target.value)) {
      document.querySelector('.item-' + i.id).classList.remove('hidden')
    } else {
      document.querySelector('.item-' + i.id).classList.add('hidden')
    }
  })
  if (questions.some(i => checkString(i, e.target.value))) {
    document.getElementById('search-fail').classList.add('hidden')
    document.getElementById('search-label').classList.remove('hidden')
    document.getElementById('search-query').innerText = e.target.value
  } else {
    document.getElementById('search-fail').classList.remove('hidden')
    document.getElementById('search-label').classList.add('hidden')
    document.querySelectorAll('.toggle-t.flex').forEach(
      i => i.classList.add('hidden')
    )
  }
}
