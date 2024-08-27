// function gcdOfStrings(str1,str2) {
//     if(str1+str2 !== str2+str1){
//         return "";
//     }
//     const gcd = (a,b) => b === 0 ? a:gcd(b , a % b);
//     const gcdLength = gcd(str1.length , str2.length);

//     return str1.slice(0,gcdLength);
// }
// let str1 = "ABCABC",str2 = "ABC";
// console.log(gcdOfStrings(str1,str2));



// function kidsWithCandies(candies , extraCandies){
//     const maxCandies = Math.max(...candies);
//     return candies.map(candyCount => (candyCount+extraCandies) >= maxCandies);s   
// }
// let candies = [1,2,3,4,5];
// let extraCandies = 3;
// console.log(kidsWithCandies(candies , extraCandies));



function canPlaceFlower(flowerBed,n){
    let count = 0;
    let i = 0;
    
    while (i < flowerBed.length) {
        if (flowerBed[i] === 0 && (i === 0 || flowerBed[i - 1] === 0) && (i === flowerBed.length - 1 || flowerBed[i + 1] === 0)) {
            count++;
            i += 2; 
        } else {
            i++;
        }
        
        if (count >= n) {
            return true; 
        }
    }
    
    return false; 
}
let flowerBed = [1,0,0,0,1];
let n = 1;
console.log(canPlaceFlower(flowerBed,n));
