let list = [5, 2, 1, -10, -8, -4, -3, -3, 2, 2, 5, 6, 7, 8, 9];
let checkingRange = list.length;

function bubbleSort(sortingList) {
   let secondIndex;
   let firstIndex;

   for (let a = 0; a < sortingList.length; a++) {
      for (let i = 0; i < checkingRange; i++) {
         firstIndex = i;
         secondIndex = firstIndex + 1;

         let temporaryData = sortingList[firstIndex];

         let firstIndexData = sortingList[firstIndex];
         let secondIndexData = sortingList[secondIndex];

         if (firstIndexData > secondIndexData) {
            sortingList[firstIndex] = secondIndexData;
            sortingList[secondIndex] = temporaryData;
         }
      }

      checkingRange = checkingRange - 1;
   }

   console.log(sortingList);
}

bubbleSort(list);