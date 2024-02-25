function triangle(value1, value1_type, value2, value2_type) {
  let typeChecker = typeCheck(value1, value1_type, value2, value2_type);
  if (typeChecker) {
    console.log(typeChecker);
    console.log("error");
    return false;
  }

  let a, b, c, alpha, beta;
  [a, b, c, alpha, beta] = dataParse(value1, value1_type, value2, value2_type);

  let dataChecker = dataCheck(a, b, c, alpha, beta);
  if (dataChecker) {
    console.log(dataChecker);
    console.log("error");
    return false;
  }
  [a, b, c, alpha, beta] = calculate(a, b, c, alpha, beta);

  let sides = sideCheck(a, b, c);
  if (sides) {
    console.log(sides);
    console.log("error");
    return false;
  }

  console.log("leg a = " + a);
  console.log("leg b = " + b);
  console.log("hypotenuse c = " + c);
  console.log("angle alpha = " + alpha);
  console.log("angle beta = " + beta);
  console.log("Result: success");
  return true;
}

function sideCheck(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a || a >= c || b >= c)
    return "Back to your ide and change values, because triangle inequality";
  return "";
}

function calculate(a, b, c, alpha, beta) {
  if (a && b) {
    c = Math.sqrt(a * a + b * b);
    alpha = (Math.asin(a / c) * 180) / Math.PI;
    beta = (Math.asin(b / c) * 180) / Math.PI;
  } else if (a && c) {
    b = Math.sqrt(c * c - a * a);
    alpha = (Math.asin(a / c) * 180) / Math.PI;
    beta = (Math.asin(b / c) * 180) / Math.PI;
  } else if (b && c) {
    a = Math.sqrt(c * c - b * b);
    beta = (Math.asin(a / c) * 180) / Math.PI;
    alpha = (Math.asin(b / c) * 180) / Math.PI;
  } else if (a && alpha) {
    c = a / Math.sin(alpha * (Math.PI / 180));
    b = Math.sqrt(c * c - a * a);
    beta = 90 - alpha;
  } else if (c && alpha) {
    beta = 90 - alpha;
    a = c * Math.sin(alpha * (Math.PI / 180));
    b = c * Math.cos(alpha * (Math.PI / 180));
  } else if (a && beta) {
    b = a * Math.tan(beta * (Math.PI / 180));
    c = Math.sqrt(a * a + b * b);
    alpha = 90 - beta;
  }

  if (!a) {
    a = "Not applicable";
  }

  if (!b) {
    b = "Not applicable";
  } 
  if (!c) {
    c = "Not applicable";
  } 
  if (!alpha) {
    alpha = "Not applicable";
  } 
  if (!beta) {
    beta = "Not applicable";
  } 

  return [a, b, c, alpha, beta];
}

function dataParse(value1, value1_type, value2, value2_type) {
  let a, b, c, alpha, beta;

  if (value1_type === "leg") {
    a = value1;
  }
  if (value2_type === "leg") {
    if (value1_type === "leg") {
      b = value2;
    } else {
      a = value2;
    } 
  }
  if (value1_type === "hypotenuse") {
    c = value1;
  } 
  if (value2_type === "hypotenuse") {
    c = value2;
  } 
  if (value1_type === "angle") {
    alpha = value1;
  } 
  if (value2_type === "angle") {
    alpha = value2;
  } 
  if (value1_type === "opposite angle" || value2_type === "opposite angle") {
    if (value1_type === "leg") {
      alpha = value2;
    } 
    if (value2_type === "leg") {
      alpha = value1;
    }
  }
  if (value1_type === "adjacent angle" || value2_type === "adjacent angle") {
    if (value1_type === "leg") {
      beta = value2;
    } 
    if (value2_type === "leg") {
      beta = value1;
    } 
  }

  return [a, b, c, alpha, beta];
}

function dataCheck(a, b, c, alpha, beta) {
  let message = "";
  if (a && a <= 0) {
    message += "Leg must be more than 0\n";
  } 
  if (b && b <= 0) {
    message += "Leg must be more than 0\n";
  } 
  if (c && c <= 0) {
    message += "Hypotenuse must be more than 0\n";
  } 
  if ((alpha && (alpha <= 0 || alpha >= 90)) 
    || (beta && (beta <= 0 || beta >= 90))) 
  {
    message += "Angles must be between 1 and 89\n";
  }
    

  if (a && c && a >= c) {
    message += "Leg must be less than hypotenuse\n";
  } 
  if (b && c && b >= c) {
    message += "Leg must be less than hypotenuse\n";
  } 

  return message;
}

function typeCheck(value1, value1_type, value2, value2_type) {
  let message = "";

  if (value1 === "") {
    message += "Value1 is empty\n";
  } else if (typeof value1 !== 'number') {
    message += "Value1 is not a number\n";
  } 

  if (value2 === "") {
    message += "Value2 is empty\n";
  } else if (typeof value2 !== 'number') {
    message += "Value2 is not a number\n";
  } 

  if (value1_type === "") {
    message += "Value1_type is empty\n";
  } else if (!["leg","hypotenuse","angle","opposite angle","adjacent angle",].includes(value1_type)) {
    message += "Value1_type is not valid\n";
  }
    

  if (value2_type === "") {
    message += "Value2_type is empty\n";
  } 
  else if (!["leg","hypotenuse","angle","opposite angle","adjacent angle"].includes(value2_type)) {
    message += "Value2_type is not valid\n";
  }

  if (
    (value1_type === "angle" && value2_type !== "hypotenuse") ||
    (value2_type === "angle" && value1_type !== "hypotenuse")
  ) {
    message += "angle must be with hypotenuse\n";
  }

  if (
    (value1_type === "opposite angle" && value2_type !== "leg") ||
    (value2_type === "opposite angle" && value1_type !== "leg")
  ) {
    message += "opposite angle must be with leg\n";
  }

  if (
    (value1_type === "adjacent angle" && value2_type !== "leg") ||
    (value2_type === "adjacent angle" && value1_type !== "leg")
  ) {
    message += "adjacent angle must be with leg\n";
  }

  if (
    (value1_type === "hypotenuse" && !["leg", "angle"].includes(value2_type)) ||
    (value2_type === "hypotenuse" && !["leg", "angle"].includes(value1_type))
  ) {
    message += "Hypotenuse must be with leg or angle\n";
  }
    

  if (
    (value1_type === "leg" &&
      !["leg", "hypotenuse", "adjacent angle", "opposite angle"].includes(
        value2_type
      )) ||
    (value2_type === "leg" &&
      !["leg", "hypotenuse", "adjacent angle", "opposite angle"].includes(
        value1_type
      ))
  ) {
    message += "Leg must be with leg, hypotenuse, adjacent angle or opposite angle\n";
  }
    
  return message;
}

triangle(3,'leg',4,'hypotenuse')
