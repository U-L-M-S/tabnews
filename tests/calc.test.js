test("basic test", callbackFunction)
function callbackFunction() {
   console.log("if you an see this, callbackFunction is working 😁") 
}

test("function without a name test", function test() {
    console.log("The test without a function's name is working 🤔")
})

test("Pro Tester", () => {
    console.log("This is a pro test 🤯")
})

test("expect n to be n", () =>{
    expect(5).toBe(5)
    // expect(2).toBe(3)    // ERROR test 
    expect("apple").toBe("apple")
})

