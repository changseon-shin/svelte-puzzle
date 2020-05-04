export const popRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
};

export const generateRandomBlocks = (): Array<number> => {
    const initialArray: Array<number> = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const block: Array<number> = [];

    for(let i=15; i >= 0; i--) {
        const popIndex = popRandomIndex(i);
        const popNumber: number = Number(initialArray.splice(popIndex, 1).join(''));

        block.push(popNumber);
    }

    // 이 안에서 generateRandomBlocks를 재귀 호출하는 식으로 하면 false/false 일 때 array를 찾지 못하는 에러 발생

    return block;
}

// 반전쌍 판정
export const distinguishValidGame = (arr: Array<number>): boolean => {
    const zeroIndexRow: number = Math.ceil((arr.findIndex(num => num === 0) + 1) / 4);
    let invertedPairCount: number = 0;

    for(let i=0; i < arr.length; i++) {
        for(let j=i+1; j < arr.length; j++) {
            if(arr[i] === 0 || arr[j] === 0) continue;
            if(arr[i] > arr[j]) invertedPairCount += 1;
        }
    }

    const oddValid = (zeroIndexRow % 2 === 1) && (invertedPairCount % 2 === 1);
    const evenValid = (zeroIndexRow % 2 === 0) && (invertedPairCount % 2 === 0);
    return oddValid || evenValid;
}