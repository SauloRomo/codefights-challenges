function firstDuplicate(a) {
 var nums = {};

    for (var i = 0; i < a.length; i++) {
        if (nums[a[i]] != undefined) {
            console.log(nums[a[i]]);
            return a[i];
        }
        nums[a[i]] = 1;
    }

    return -1;
}
