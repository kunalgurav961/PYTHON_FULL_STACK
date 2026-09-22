let remiderList = document.getElementById("reminderList");

const openModal = () => {
    let modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  console.log(modal.className);
};
const closeModal = () => {
  let modal = document.getElementById("modal");
  modal.classList.add("hidden");
  console.log(modal.className);
};
const saveReminder = (e) => {
  e.preventDefault();
    let task = document.createElement("div");
    
  let title = e.target[1].value;
  let date = e.target[2].value;
    let time = e.target[3].value;
    

    task.innerHTML = `<div class="flex items-center gap-3">
                
                    <input type="checkbox" class="w-5 h-5 accent-indigo-600">
                
                    <div>
                        <h3 class="font-semibold text-gray-800">
                            ${title}
                        </h3>
                
                        <p class="text-sm text-gray-500">
                            Today • ${time}
                        </p>
                    </div>
                
                </div>
                
                <div class="flex items-center gap-2">
                
                    <button class="p-2 text-blue-500 hover:bg-blue-50 rounded-lg">
                        ✏️
                    </button>
                
                    <button class="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                        🗑️
                    </button>
                
                </div>`;
    remiderList.appendChild(task)
    closeModal()
};
