// Formater for Markdown data
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// passing props in function to format the AI Reply 
function Formater_data({ data }) {
    return (
        <ReactMarkdown components={{
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                    <SyntaxHighlighter style={dracula} language={match[1]} {...props}>
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                ) : (
                    <code className={className} {...props}>{children}</code>
                );
            }
        }} remarkPlugins={[remarkGfm]}>
            {data}
        </ReactMarkdown>
    )
}
export default Formater_data;