const result = [];
const nums = document.querySelectorAll('.member')
for(let i = 0; i < nums.length;i++) {
    if(nums[i].className.indexOf('ng-scope') !== -1) {
        result.push(nums[i].title);
    }
}
console.log(result)