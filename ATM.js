console.log("Welcome !\nPlease insert your Card")
console.log("Hi,Please do not Remove your Chip Card.\nLeave your Card Inserted during\nthe Entire Transaction")
let user_input=require("readline-sync")
let language=user_input.questionInt("Please Select Language")
if (language==1){
    console.log("English")
}
else if (language==2){
    console.log("Hindi")
}
else{
    console.log("Punjabi")
}
var account=34305537855
var mypin=2484
var total=455897
let pin=user_input.questionInt("Please Enter Your PIN")
if (pin==mypin){
    console.log("PIN GENERATION")
    let transaction=user_input.questionInt("Please Select Your Transaction\n1.Cash Withdrawal\n2.Balance Inquiry\n3.Deposit\n4.PIN Change")
    if (transaction==1){
        let withdraw=user_input.questionFloat("Please Enter Amount to Withdrawal")
        console.log("Cash Available:Rs.100,Rs.200,Rs.500,Rs.2000")
        if (total>withdraw){
            let balance=total-withdraw
            console.log("Your Transaction is Being Processed.\nPlease Wait")
            console.log("Please Collect Cash")
            console.log("Your Availbl Balance :",balance)
        }
        else{
            console.log("Insufficient Balance")
        }
    }
    else if (transaction==2){
        console.log("Your Balance is :",total)
    }
    else if (transaction==3){
        let deposit=user_input.questionFloat("Enter Your Amount to Depost")
        let balance=total+deposit
        console.log("Success")
        console.log("Total Balance Now is :",balance)
    }
    else if (transaction==4){
        let pinchange=user_input.questionInt("you want to change your PIN code Yes/NO:")
        if (pinchange==1){
            console.log("Yes")
            let ac=user_input.questionInt("Please enter your account number:")
            if (ac==account){
                let p=user_input.questionInt("Please Enter Your Previous PINCode")
                if (p==mypin){
                    let newpin=user_input.questionInt("Please Enter Your New PIN Code :")
                    console.log("Your New PIN Code is :",newpin)
                }
                else{
                    console.log("Your PIN is Invalied")
                }
            }
            else{
                console.log("Your Account Number is Invalied")
            }
        }
        else{
            console.log("You Dont Want Change Your PIN Code")
        }
    }
    else{
        print("Choose Only Valied Transaction")
    }
}
else{
    console.log("Your PIN is Invalied")
}