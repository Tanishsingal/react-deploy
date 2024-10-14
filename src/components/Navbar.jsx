import { Button } from "./Button"


export let Navbar=()=>{
        return(
            <div className="border-b">
            <div className="flex border-b justify-between max-w-screen-xl mx-auto">
                <div className="text-2xl font-bold flex flex-col justify-center">
                    Tanish
                </div>
                <div>
                    <Button onClick={()=>{
                        window.location.href="https://tailwindcss.com/docs/guides/vite"
                    }}>Open Source</Button>
                    <Button onClick={()=>{
                        window.location.href="https://tailwindcss.com/docs/guides/vite"
                    }}>Youtube</Button>
                </div>
    
                
                </div>
            </div>
        )
}