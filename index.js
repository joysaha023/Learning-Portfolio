function sendMil(){
    var params = {
        name: document.getElementById("nme").value,
        email: document.getElementById("emil").value,
        message: document.getElementById("msg").value,
    };
    const serviceID = "service_5muh4g9";
    const templateID = "template_j3235sp";
    
    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("nme").value = "";
        document.getElementById("emil").value = "";
        document.getElementById("msg").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}
