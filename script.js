function calculateBMI() {
  let h = height.value / 100;
  console.log(height.value);
  console.log(h);
  let w = weight.value;
  console.log(weight.value);
  let bmi = w / (h * h);
  let bmiRounded = bmi.toFixed(1);
  console.log(bmiRounded);
  if (bmi < 18.5) {
    console.log("uw");
    result.innerHTML = `<div class="card bg-danger text-white" style="border: none; margin: 5px;box-shadow: 0 0 25px rgba(0,0, 0, 0.2) ;">
        <div class="card-body" >
          <b>BMI=</b> ${bmiRounded} <br> <b>UNDERWEIGHT</b> <i class="fa-regular fa-face-frown fa-lg" style="color: #ffffff;"></i>
        </div>
      </div>`;
  } else if (bmi >= 18.5 && bmi <= 25) {
    result.innerHTML = `<div class="card bg-success text-white" style="border: none; margin: 5px;box-shadow: 0 0 25px rgba(0,0, 0, 0.2) ;">
        <div class="card-body" >
          <b>BMI=</b> ${bmiRounded} <br> <b>NORMAL </b> <i class="fa-regular fa-thumbs-up fa-beat fa-lg" style="color: #ffffff;"></i>
        </div>
      </div>`;

    console.log("healthy");
  } else {
    result.innerHTML = `<div class="card bg-danger text-white" style="border: none; margin: 5px;box-shadow: 0 0 25px rgba(0,0, 0, 0.2) ;">
        <div class="card-body" >
          <b>BMI=</b> ${bmiRounded} <br> <b>OVERWEIGHT</b> <i class="fa-regular fa-face-surprise fa-lg" style="color: #ffffff;"></i>
        </div>
      </div>`;
    console.log("ow");
  }
}
