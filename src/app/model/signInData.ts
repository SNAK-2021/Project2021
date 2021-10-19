export class SignInData{
    private email:string;
    private password:string;
    public designation:string;

    constructor(email: string,password: string,designation:string){
        this.email=email;
        this.password=password;
        this.designation=designation;
    }
    getEmail():string{
        return this.email;
    }
    getPassword():string{
       return this.password;
    }
    getDesignation():string{
        return this.designation;
    }
}