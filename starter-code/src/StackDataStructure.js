function StackDataStructure () {
    this.stackControl=[]
    this.MAX_SIZE = 10;
    this.isEmpty = function(){
        if(this.stackControl.length === 0){
            return true;
        } else{
            return false;
        }
        
    }

    
    this.canPush=function(){
        return this.stackControl.length<this.MAX_SIZE
    };

    this.push=function(a){
        if(this.canPush()){
        this.stackControl.push(a);
        return this.stackControl
        }else{
            return "Stack Overflow"
        }
    };

    this.pop=function(){
        if(this.isEmpty()){
            return "Stack Underflow"
        }else{
            return this.stackControl.pop();
        }
    }

}



