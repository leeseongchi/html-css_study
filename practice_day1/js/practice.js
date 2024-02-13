function handleSubmitClick() {
    const textInputs = document.querySelectorAll(".text-inputs");
    const data = {
        name: textInputs[0].value,
        age: textInputs[1].value
    };

    console.log(data);

    const option = {
        method: "POST",
        header: {
            "Content-Type":"application/json"
        },
        body: jsonData
    };

    fetch("http://localhost:8080/insert_and_select/data/addition", option)
    .then((response) => {
        response.json()
        .then((json) => {
            console.log(json.data);
        });
    });

}