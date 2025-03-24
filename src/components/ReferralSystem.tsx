
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Link, QrCode, Trophy, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ReferralSystem = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  
  // This would typically come from your auth context or user profile
  const referralCode = "ABC123"; 
  const referralLink = `${window.location.origin}/register?ref=${referralCode}`;
  
  // Mock data for referral status - in a real app, this would come from API
  const referralStats = {
    totalReferred: 12,
    activeReferred: 8,
    tier: 'Silver',
    tierProgress: 65, // percentage
    nextTier: 'Gold',
    remainingForNextTier: 5,
    priority: 3, // Priority number in queue (lower is better)
    priorityTiers: [
      { name: 'Bronze', minReferrals: 0, priorityBonus: 0 },
      { name: 'Silver', minReferrals: 5, priorityBonus: 1 },
      { name: 'Gold', minReferrals: 15, priorityBonus: 2 },
      { name: 'Platinum', minReferrals: 30, priorityBonus: 3 }
    ]
  };

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

  const toggleQrCode = () => {
    setShowQrCode(!showQrCode);
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
          
          {/* Referral Priority Status */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                <span className="font-medium">Tier Status: {referralStats.tier}</span>
              </div>
              <span className="text-sm text-gray-600">Next: {referralStats.nextTier}</span>
            </div>
            
            <Progress value={referralStats.tierProgress} className="h-2 mb-2" />
            
            <div className="flex justify-between text-xs text-gray-600 mb-3">
              <span>{referralStats.tier}</span>
              <span>{referralStats.nextTier}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-voyage-primary mr-1" />
                <span className="text-sm">{referralStats.totalReferred} people referred</span>
              </div>
              <div className="bg-voyage-accent text-voyage-primary text-xs font-medium px-2 py-1 rounded-full">
                Priority #{referralStats.priority} in queue
              </div>
            </div>
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
              onClick={toggleQrCode}
            >
              <QrCode className="h-4 w-4" />
              {showQrCode ? 'Hide QR' : 'Show QR'}
            </Button>
          </div>
          
          {showQrCode && (
            <div className="flex justify-center py-2">
              <div className="w-40 h-40 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                <QrCode className="h-32 w-32 text-gray-700" />
              </div>
            </div>
          )}
          
          <div className="pt-2 border-t border-gray-100">
            <p className="text-sm font-medium">Referral Benefits:</p>
            <ul className="text-xs text-gray-600 list-disc list-inside space-y-1 mt-1">
              <li>Priority in draws based on your referral tier</li>
              <li>Each referral increases your chance by 5%</li>
              <li>Your friend gets a welcome bonus</li>
            </ul>
            
            {/* Referral tier table */}
            <div className="mt-3 border border-gray-100 rounded-lg overflow-hidden">
              <table className="min-w-full text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium text-gray-700">Tier</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-700">Min Referrals</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-700">Priority Boost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {referralStats.priorityTiers.map((tier) => (
                    <tr key={tier.name} className={tier.name === referralStats.tier ? 'bg-voyage-accent bg-opacity-30' : ''}>
                      <td className="px-3 py-2">{tier.name}</td>
                      <td className="px-3 py-2">{tier.minReferrals}</td>
                      <td className="px-3 py-2">+{tier.priorityBonus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralSystem;
