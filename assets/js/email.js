(function () {
    emailjs.init("T18UXDBEfDzKthsHR");
})();

function sendEmail(event) {
    event.preventDefault();
    const submitButton = document.querySelector('.form_button');
    const btnloader = document.querySelector('.btnloader');

    // Show the btnloader and disable the submit button
    submitButton.disabled = true;
    submitButton.querySelector('.button-text').style.display = 'none';
    btnloader.style.display = 'inline-block';

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    emailjs.send("service_fb1ehaq", "template_lxn8k5c", {
        from_name: data?.name,
        email:data?.email,
        mobile: data?.mobile,
        message: data?.message,
        subject:data?.subject,
        reply_to: "ankit.detroja.108@gmail.com",
    }).then(function (response) {
        // Hide the btnloader and enable the submit button
        submitButton.disabled = false;
        submitButton.querySelector('.button-text').style.display = 'inline';
        btnloader.style.display = 'none';
        document.getElementById("contactForm").reset();

        alert('Thank You! - We will contact you very soon.');
    }, function (error) {
        // Hide the btnloader and enable the submit button
        submitButton.disabled = false;
        submitButton.querySelector('.button-text').style.display = 'inline';
        btnloader.style.display = 'none';
        document.getElementById("contactForm").reset();

        alert('Failed! - Something went wrong, Please try again.');
    });
}



// function submitForm() {
//     var form = document.getElementById("contactForm");
//     var submitBtn = document.getElementById("submitBtn");

//     form.addEventListener("submit", function (event) {
//       event.preventDefault();
//       var formData = new FormData(form);
//       console.log({ formData, form });

//       fetch(
//         "https://script.google.com/macros/s/AKfycbx4vakSSht5877EbKnGTvoAjen890fTeBNAD-AuW_KLbCCxr_xfW-SxIp7nLpVZl86K/exec",
//         {
//           method: "POST",
//           body: formData,
//         }
//       )
//         .then((response) => {
//           console.log({ response });
//           if (response.ok) {
//             alert("Your message received!");
//             form.reset();
//           } else {
//             alert("An error occurred. Please try again.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("An error occurred. Please try again.");
//         })
//         .finally(() => { });
//     });
//   }