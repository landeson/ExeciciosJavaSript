function calculateDiscount(name, value, isfirstPurchase, isCashpayment){
    if(isfirstPurchase && isCashpayment){

        if (value > 1000) {}
        else if(value < 500){}
        else{}

    }

    if(isfirstPurchase && !isCashpayment){

        if (value > 1000) {}
        else if(value < 500){}
        else{}

    }

    if(!isfirstPurchase && isCashpayment){

        if (value > 1000) {}
        else if(value < 500){}
        else{}

    }

    if(!isfirstPurchase && !isCashpayment){

        if (value > 1000) {}
        else if(value < 500){
            Math.random() * (20 - 10) + 10;
        }
        else{}

    }

}


