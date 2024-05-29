function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_xm9h9w6",
      "template_zgcx429",
      event.target,
      "IUmjYA_xGIwqKwSe6"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is teporarily unavailable. Please contact me directly at matthewrmuller@gmail.com"
      );
    });
}
let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true
    document.body.classList += " modal__open"
}
