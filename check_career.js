function checkCareer(career) {
  let careerTitle = {} // 為甚麼用物件? A:因為req.body回傳的是物件
  switch (career) {
    case 'engineer':
      careerTitle = { engineer: 'on' } // 所以index.hbs那邊才要加入html的if條件式
      break;
    case 'designer':
      careerTitle = { designer: 'on' }
      break;
    case 'enterpreneur':
      careerTitle = { enterpreneur: 'on' }
      break;
    default:
      break;
  }
  return careerTitle
}

module.exports = checkCareer