import { ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function ContactSocialMedia({ children, url }: { children: ReactNode, url: string }) {

  return (
    <Button asChild className='w-full h-16 p-5 text-xl'>
      <Link to={url} target="_blank" className=' flex justify-between items-center'>
        <div className='w-1/2 flex justify-start items-center gap-2'>
          {children}
        </div>
        <ExternalLink />
      </Link>
    </Button>
  );
}

export default ContactSocialMedia;