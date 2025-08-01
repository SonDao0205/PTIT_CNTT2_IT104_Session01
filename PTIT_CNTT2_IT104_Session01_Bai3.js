const student = [
    {id: 1, name: "Nguyễn A"},
    { id: 2, name: "Trần B" }
]

student.forEach(element => {
    console.log(`Xin chào ${element.name}! Mã số: ${element.id}.`);
});