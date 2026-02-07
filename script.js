const HF_API_KEY = "ТВОЙ_HF_API_KEY"; // встав API токен

async function send() {
  const inputField = document.getElementById("input");
  const text = inputField.value;
  inputField.value = "";

  const messages = document.getElementById("messages");
  messages.innerHTML += `<div class="msg user">Ти: ${text}</div>`;

  const res = await fetch("https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-125M", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${HF_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: text })
  });

  const data = await res.json();
  messages.innerHTML += `<div class="msg ai">AI: ${data[0].generated_text}</div>`;
}

