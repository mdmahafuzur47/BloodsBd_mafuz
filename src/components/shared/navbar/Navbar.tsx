/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center">
            <img className="max-w-[120px] w-full" src="/images/logo/logo.png" alt="logo" />
            <div className="flex items-center gap-10">
               <div className="flex items-center gap-2">
               <img src="/images/flag.png" alt="flag" />
               <h1 className="text-xl font-semibold">Bangladesh</h1>
               </div>
               <Button >Become a Donor</Button>
            </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
