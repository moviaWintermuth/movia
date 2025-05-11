document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;

  const formData = {
    user_name: form.user_name.value,
    user_email: form.user_email.value,
    user_phone: form.user_phone.value,
    user_region: form.user_region.value,
    user_address: form.user_address.value,
    department: form.department.value,
    contact_person: form.contact_person.value,
    message: form.message.value,
  };

  emailjs.send("service_w24fwpb", "template_923cuji", formData)
    .then(() => {
      alert("Nachricht erfolgreich gesendet!");
      form.reset();
    }, (error) => {
      alert("Fehler beim Senden der Nachricht:\n" + JSON.stringify(error));
    });
});
