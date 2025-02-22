import FormInput from "@molecules/FormInput"
import Button from "@atoms/Button"
import { Link } from "react-router-dom"

export default function FormAccessData(){

    return(

        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">

               <FormInput id="email" text="Email" placeholder="Inserisci la tua email" type="email" required={true} />

               <FormInput id="password" text="Password" placeholder="Inserisci la tua password" type="password" required={true} />

            </div>

            <div className="text-center flex flex-col items-center mt-16 mb-11">
                <Button to='/login/otp'>Accedi</Button>
                <Link to="/register" href="" className="font-bold text-xl mt-2">Registrati</Link>
            </div>
        </form>


    )

}