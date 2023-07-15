import { group } from "console";
import { WalletIcon } from "@heroicons/react/24/outline"
import { CubeTransparentIcon } from "@heroicons/react/24/solid"
import { ShieldExclamationIcon } from "@heroicons/react/24/outline"
function HomePage() {

  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl mb-20">GPT Messenger 2.0</h1>
      <div className="flex space-x-4 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <WalletIcon className="h-8 w-8 text-blue-600 animate-bounce " />
            <h2 className="animate-bounce">Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Remembers what user said earlier in the conversation</p>
            <p className="infoText">Allows user to provide follow-up corrections</p>
            <p className="infoText">Trained to decline inappropriate requests</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">

            <CubeTransparentIcon className="h-8 w-8 text-green-600 animate-bounce" />
            <h2 className="animate-bounce">Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain quantum computing in simple terms</p>
            <p className="infoText">Got any creative ideas for a 10 year olds birthday</p>
            <p className="infoText">How do I make an HTTP request in Javascript</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">

            <ShieldExclamationIcon className="h-8 w-8 text-red-600 animate-bounce " />
            <h2 className="animate-bounce">Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage