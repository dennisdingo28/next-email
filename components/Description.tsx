import Code from "./ui/code"
import Heading from "./ui/heading"
import Paragraph from "./ui/paragraph"

const Description = () => {
  return (
    <div className="mt-8 font-roboto">
        <Heading text="What is NextEmail ?"/>
        <Paragraph text="Our email sending tool aims to simplify the process of working with emails and streamline the sending process. With just two clicks and a single line of code, you can securely send emails using custom templates, allowing you to stay productive and focus on the crucial aspects of your development workflow." className="ml-2 font-roboto"/>
        <div className="mt-7">
          <Code label="Overview" code={`const apiUrl = 'https://api.example.com/endpoint';
            const requestParameters = { param1: 'value1', param2: 'value2' };

            fetch(apiUrl, {
              method: 'POST',
              body: JSON.stringify(requestParameters),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(response => response.json())
              .then(data => {
                console.log('Response:', data);
              })
              .catch(error => {
                console.error('Error:', error);
              });
              `}/>
        </div>
        
    </div>
  )
}

export default Description
