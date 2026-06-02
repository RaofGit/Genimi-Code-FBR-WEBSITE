document.getElementById('clientTaxForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page reload hone se rokta hai

    // Client ki details capture karna
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const service = document.getElementById('serviceRequired').value;

    // Sukriya ka message dikhana
    alert(`Shukriya ${name}! Aapki request "${service}" ke liye received ho gayi hai. Hamare FBR Consultant bohot jald aap se number ${phone} par rabta karein ge.`);

    // Form ko khali (reset) kar dena submission ke baad
    this.reset();
});