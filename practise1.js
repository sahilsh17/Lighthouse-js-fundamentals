function calculateRectangleArea(length, width)
{
  
  var area = length * width;
  area = length >= 0 ? area:undefined;
  area = width >= 0 ? area:undefined;
  
  return area;
}

function calculateTriangleArea(base, height)
{
  var area = 0.5 * base * height;
  area = base >=0 ? area:undefined;
  area = height >=0 ? area:undefined;

  return area;
}

function calculateCircleArea(radius)
{
  var area = Math.PI * radius * radius;
  area = radius >=0 ? area:undefined;

  return area;
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined