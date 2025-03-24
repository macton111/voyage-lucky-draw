
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Link, QrCode } from 'lucide-react';

const ReferralSystem = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  // This would typically come from your auth context or user profile
  const referralCode = "ABC123"; 
  const referralLink = `${window.location.origin}/register?ref=${referralCode}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      
      toast({
        title: "Link Copied!",
        description: "Referral link has been copied to clipboard.",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Could not copy link. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="bg-white shadow-subtle hover:shadow-elevated transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Link className="h-5 w-5 mr-2 text-voyage-primary" />
          Refer Friends
        </CardTitle>
        <CardDescription>
          Share your referral link and earn rewards
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input 
              value={referralLink}
              readOnly
              className="font-medium text-sm bg-gray-50"
            />
            <Button 
              onClick={copyToClipboard}
              variant="outline" 
              className={`min-w-20 ${copied ? 'bg-voyage-success text-white' : ''}`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-sm font-medium">Share via QR Code</p>
              <p className="text-xs text-gray-500">Scan to open registration with your referral</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
            >
              <QrCode className="h-4 w-4" />
              Show QR
            </Button>
          </div>
          
          <div className="pt-2 border-t border-gray-100">
            <p className="text-sm font-medium">Referral Benefits:</p>
            <ul className="text-xs text-gray-600 list-disc list-inside space-y-1 mt-1">
              <li>You earn 5% discount on your next draw entry</li>
              <li>Your friend gets a welcome bonus</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralSystem;
