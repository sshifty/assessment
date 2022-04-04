import {
  DECIMAL_LENGTH,
  HUNDRED_LENGTH,
  numbers,
  decimals,
  scales,
} from "./constants";

/*
    The main idea is to seperate the number into 3 digit chunks.
    Made it in reverse order, so I can add the extra scale word depends the chunks order like so:
        -The first 3 digits cant be thousand just hundreds max so the first element of the array is empty, 4-6 digits is thousand and so on.
        
*/
const numberToWord = (num) => {
  if (!num) {
    return null;
  }
  if (Number(num) === 0) return "zero";
  const final = [];
  let chunks = [];
  let temp, decimal;
  const numArr = String(num).split("");

  //split into chunks from the end by 3
  let from = numArr.length;
  while (from > 0) {
    const to = from;
    chunks.push(numArr.slice((from = Math.max(0, from - 3)), to));
  }
  for (let i = 0; i < chunks.length; i++) {
    temp = [];
    decimal = [];
    const chunkLength = chunks[i].length;
    let verifyScale = false; //if the chunk full of zeros dont put scale
    for (let j = 0; j < chunkLength; j++) {
      const chunk = parseInt(chunks[i][j]); //parse it to number because to use it as index to get the number && for condition checking
      if (chunk) {
        verifyScale = true;
      }
      if (chunkLength === HUNDRED_LENGTH) {
        if (j === 0) {
          if (chunk) {
            temp.push(numbers[chunk] + " hundred");
            if (chunks[i][1] != "0" || chunks[i][2] != "0") {
              temp.push("and");
            }
          } else {
            if (chunks[i][1] != "0" || chunks[i][2] != "0") {
              temp.push("and");
            }
            if (numbers[chunk]) {
              temp.push(numbers[chunk]);
            }
          }
        } else if (j === 1) {
          if (chunk === 1) {
            //checking if the last two digits between 10-19 if so  break out of loop to not display the last digit
            temp.push(numbers[parseInt(chunk + chunks[i][j + 1])]);
            break;
          } else {
            if (chunk !== 0 && chunks[i][j + 1] != "0") {
              decimal.push(decimals[chunk] + "-" + numbers[chunks[i][j + 1]]);
              temp.push(decimal);
              break;
            } else {
              if (decimals[chunk]) {
                temp.push(decimals[chunk]);
              }
            }
          }
        } else {
          if (numbers[chunk]) {
            temp.push(numbers[chunk]);
          }
        }
      } else if (chunkLength === DECIMAL_LENGTH) {
        if (j === 0) {
          if (chunk === 1) {
            let tenChunk = parseInt(chunk + chunks[i][j + 1]);
            temp.push(numbers[tenChunk]);
            break;
          } else {
            if (chunk !== 0 && chunks[i][j + 1] != "0") {
              decimal.push(decimals[chunk] + "-" + numbers[chunks[i][j + 1]]);
              temp.push(decimal);
              break;
            } else {
              if (decimals[chunk]) {
                temp.push(decimals[chunk]);
              }
            }
          }
        } else {
          if (numbers[chunk]) {
            temp.push(numbers[chunk]);
          }
        }
      } else {
        if (numbers[chunk]) {
          temp.push(numbers[chunk]);
        }
      }
    }

    if (verifyScale && scales[i]) {
      temp.push(scales[i]);
    }
    if (temp.length) {
      final.push(temp.join(" "));
    }
  }

  return final.reverse().join(" ");
};

export default numberToWord;
