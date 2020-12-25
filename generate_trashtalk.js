// define generateTrashtalk function
function generateTask(career) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    enterpreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const index = Math.floor(Math.random() * (task[career].length))
  return (task[career])[index]
}

function generatePhrase() {
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const index = Math.floor(Math.random() * (phrase.length))
  return phrase[index]
}

function generateTrashtalk(career) {
  const target = ['工程師', '設計師', '創業家']
  let careerNum = -1
  switch (career) {
    case 'engineer':
      careerNum = 0
      break;
    case 'designer':
      careerNum = 1
      break;
    case 'enterpreneur':
      careerNum = 2
      break;
    default:
      careerNum = -1
      break;
  }
  if (careerNum >= 0) {
    return '身為一個' + target[careerNum] + '，' + generateTask(career) + '，' + generatePhrase() + '吧！'
  } else {
    return '請選擇一個職業'
  }
}

module.exports = generateTrashtalk