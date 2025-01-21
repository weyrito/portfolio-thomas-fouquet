import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";
import { Copy } from "lucide-react";
import { ToastContainer, toast, Bounce } from "react-toastify";
export default function Footer() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("alternance@thomas-fouquet.fr");
      toast.info("Email copié dans le presse papier", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.warn("Erreur lors de la copie de l'email" + error, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="mt-4 sm:mt-8 w-full px-2 sm:px-0 flex justify-center ">
        <Snippet
          hideCopyButton
          hideSymbol
          className="bg-green-50"
          variant="bordered"
        >
          <span className="flex flex-col items-center justify-center w-full">
            <p className="text-center dark:text-black">Contactez moi ! </p>
            <Button
              aria-label="Copier l'adresse email"
              className="w-full sm:w-auto mx-auto"
              variant="light"
              onPress={copyEmail}
            >
              <div className="flex items-center justify-center gap-2">
                <Code
                  className="break-all sm:break-normal truncate text-center"
                  color="primary"
                >
                  alternance@thomas-fouquet.fr
                  <Copy className="w-4 h-4 ml-2 text-default-400 group-hover:text-primary transition-colors inline-block flex-shrink-0" />
                </Code>
              </div>
            </Button>
          </span>
        </Snippet>
      </div>
      <span className="mt-2 text-default-600 text-xs sm:text-sm md:text-base text-center">
        Site web développé grâce à <span className="font-bold">Next.js</span> et{" "}
        <span className="font-bold">HeroUI</span>
      </span>
      <ToastContainer />{" "}
    </>
  );
}
