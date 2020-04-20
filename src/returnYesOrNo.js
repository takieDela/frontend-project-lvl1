const returnYesOrNo = (expression) => {
  let answer;
  if (expression === true) {
    answer = 'yes';
  }
  if (expression === false) {
    answer = 'no';
  }
  return answer;
};

export default returnYesOrNo;
