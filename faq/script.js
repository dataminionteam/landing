// Groups name
// @ id: must be a single word string
groups = [
  {
    name: "General",
    id: "a", // First group must be "a"
  },
  {
    name: "Payments and Plans",
    id: "b",
  },
  {
    name: "Account",
    id: "c",
  },
];

// Question limit: 1000 (0 - 999)
const questions = [
  {
    q: "Why does my file take a while to load?",
    a: "Every file you load must be read and processed by the Minionbot. The speed of its availability will depend on the size and complexity of the file.",
    group: "a",
  },
  {
    q: "What happens if I run out of allotted questions to the Minionbot?",
    a: "Your monthly maximum allotted questions will reset to Zero on the first of every month. In the event that you exceed your maximum amount of questions within a calendar month you will have the following options: If you are using a Premium account, you will be prompted to upgrade to the Professional account. You may toggle back to the Premium account the following month.",
    group: "a",
  },
  {
    q: "What file formats are supported?",
    a: "Currently, PDF and Microsoft Word file formats are supported. DATAMINION engineers will be adding other file formats in the future.",
    group: "a",
  },
  {
    q: "My file is too big for the Minionbot. What can I do?",
    a: "The Minionbot may have issues processing files that are densely packed with content. For example, if a college textbook is not loading properly, save as respective chapters as PDFs and load them individually.",
    group: "a",
  },
  {
    q: "When will new features be available?",
    a: "We are constantly developing new features. They will generally be implemented on a monthly basis.",
    group: "a",
  },
  {
    q: "How do I delete a file I have uploaded?",
    a: "While viewing in Grid mode: Click on the file. Click on the three dots at the top right of the file. Click remove. While viewing in List mode: Click on the three dots at the right of the file. Click remove.",
    group: "a",
  },
  {
    q: "Can I load more documents after I have uploaded the maximum amount of documents in my tier?",
    a: "Yes. Your maximum document uploads quota has to do with storage space. If you need to load more files, remove older files that you are not using to free up space.",
    group: "a",
  },
  {
    q: "Why is there a limited amount of questions per month?",
    a: "The language model has a finite amount of questions allotted per user. We expect this question limit to increase in the future and eventually become irrelevant to humans.",
    group: "a",
  },
  {
    q: "Is there a business plan available for my small business/ corporation?",
    a: "The Minionbot is evolving quickly. It will be available as a business plan in the future. In the meantime, we request that you use individual accounts.",
    group: "b",
  },
  {
    q: "How do I edit my Password”?",
    a: "There are two ways to reset your Password. From the Login, you can select "Forgot your password" and an option to reset your password will be emailed you your contact on file. The other option is to go the Account page and select Profile.Then, select the edit icon next to Personal Info. There, you may edit your current password.,
    group: "c",
  },
  {
    q: "Why is Billing and external link?”?",
    a: "DATAMINION uses Stripe (Stripe.com) to manage all transactions. This optimizes the security of your financial data.",
    group: "c",
  },
  {
    q: "How do I cancel my monthly subscription",
    a: "Log into DATAMINION. Go to your Account page. Select Billing. This will take you to your Plan manager. Choose Cancel Plan. *Note: If you are using Safari as a browser, you may have to select the pop up icon in the URL/ Search bar. ",
    group: "b",
  },
];

// Render group tabs
groups.forEach((e) => {
  document.getElementById("search-tabs").innerHTML += `
    <p class="${e.id === "a" ? "" : "hidden"} toggle-${e.id}-active md:p-2 text-purple font-bold">
      ${e.name}
    </p>
    <button
      onclick="setGroup('${e.id}')"
      class="${e.id === "a" ? "hidden" : ""} toggle-${e.id} md:p-2 hover:text-purple transition-colors tracking-wide"
    >
      ${e.name}
    </button>
  `;
});

// Toggle group tabs
let currGroup = "a";
function setGroup(id) {
  if (currGroup) {
    document.querySelector(`.toggle-${currGroup}`).classList.remove("hidden");
    document
      .querySelector(`.toggle-${currGroup}-active`)
      .classList.add("hidden");
    document
      .querySelectorAll(`.group-${currGroup}`)
      .forEach((e) => e.classList.add("hidden"));
  }
  currGroup = id;
  if (currGroup) {
    document.querySelector(`.toggle-${currGroup}`).classList.add("hidden");
    document
      .querySelector(`.toggle-${currGroup}-active`)
      .classList.remove("hidden");
    document
      .querySelectorAll(`.group-${currGroup}`)
      .forEach((e) => e.classList.remove("hidden"));
  }
}

// Render questions
questions.forEach((e, i) => {
  document.getElementById("main").innerHTML += `
    <div class="${e.group === "a" ? "" : "hidden"} group-${e.group} item-${i.toString().padStart(3, "0")} flex flex-1 flex-col py-4 text-lg font-medium border-b border-slate">
      <div onClick="setQuestion('${i.toString().padStart(3, "0")}')" class="flex justify-between py-4 md:px-2 cursor-pointer">
        <p>${e.q}</p>
        <img class="open-toggle open-${i.toString().padStart(3, "0")}" src="../assets/arrow-down.svg">
        <img class="open-${i.toString().padStart(3, "0")} hidden" src="../assets/arrow-up.svg">
      </div>
      <p class="open-${i.toString().padStart(3, "0")} hidden md:px-2 py-2">${e.a}</p>
    </div>
  `;
});

// Toggle questions
let currQuestion = "";
function setQuestion(id) {
  if (currQuestion === id) {
    document
      .querySelectorAll(`.open-${currQuestion}`)
      .forEach((e) => e.classList.toggle("hidden"));
    return;
  }
  if (currQuestion) {
    document
      .querySelectorAll(`.open-${currQuestion}`)
      .forEach((e) => e.classList.add("hidden"));
    document
      .querySelector(`.open-toggle.open-${currQuestion}`)
      .classList.remove("hidden");
  }
  currQuestion = id;
  if (currQuestion) {
    document
      .querySelectorAll(`.open-${currQuestion}`)
      .forEach((e) => e.classList.remove("hidden"));
    document
      .querySelector(`.open-toggle.open-${currQuestion}`)
      .classList.add("hidden");
  }
}

// Search comparison function
function checkString(input, query) {
  return (
    input.q.toLowerCase().includes(query.toLowerCase()) ||
    input.a.toLowerCase().includes(query.toLowerCase())
  );
}

function resetSearch() {
  document.querySelectorAll(".toggle-search").forEach((e) => {
    e.classList.toggle("hidden");
  });
}

function resetQuery() {
  document.getElementById("search-tabs").classList.remove("hidden");
  document.getElementById("search-fail").classList.add("hidden");
  document.getElementById("search-label").classList.add("hidden");
  document
    .querySelectorAll("#main > div")
    .forEach((e) => e.classList.add("hidden"));
  setGroup(currGroup);
}

function handleInput(e) {
  if (e.target.value.length < 1) {
    resetQuery();
    return;
  }
  if (currQuestion) {
    setQuestion("");
  }
  document.getElementById("search-tabs").classList.add("hidden");
  questions.forEach((i, j) => {
    if (checkString(i, e.target.value)) {
      document
        .querySelector(".item-" + j.toString().padStart(3, "0"))
        .classList.remove("hidden");
    } else {
      document
        .querySelector(".item-" + j.toString().padStart(3, "0"))
        .classList.add("hidden");
    }
  });
  if (questions.some((i) => checkString(i, e.target.value))) {
    document.getElementById("search-fail").classList.add("hidden");
    document.getElementById("search-label").classList.remove("hidden");
    document.getElementById("search-query").innerText = e.target.value;
  } else {
    document.getElementById("search-fail").classList.remove("hidden");
    document.getElementById("search-label").classList.add("hidden");
    document
      .querySelectorAll("#main > div")
      .forEach((i) => i.classList.add("hidden"));
  }
}

const searchOpen = document.getElementById("search-open");
searchOpen.addEventListener("click", () => {
  resetSearch();
});

const searchClose = document.getElementById("search-close");
searchClose.addEventListener("click", () => {
  resetSearch();
  resetQuery();
});
