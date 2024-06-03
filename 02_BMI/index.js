const form  = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value

    if(height === '' || height <0 || isNaN(height))
        {
            results.innerHTML =`please enter a valid height ${height}`
        }
    else if(weight === '' || weight <0 || isNaN(weight))
        {
            results.innerHTML =`please enter a valid weight ${weight}`
        }

        else
        {
            const bmi = (weight / ((height*height)/10000)).toFixed(2)
            results.innerHTML = `<span>${bmi}</span>`
        }
})