export const age = document.getElementById("age");

export function hardTruth () {
    const hardTruth = document.getElementById("a-hard-truth");
    console.log(age.value)
    if(age.value < 18) {
        console.log("Nope")
        hardTruth.style.visibility="hidden";
    }else{
        hardTruth.style.visibility="visible";
    }
}
