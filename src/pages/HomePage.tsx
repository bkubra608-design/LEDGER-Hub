import React from 'react';
import { Hero } from '../components/home/Hero';
import { SmallBusinesses } from '../components/home/SmallBusinesses';
import { BuiltAroundWork } from '../components/home/BuiltAroundWork';
import { JourneyNICHyderabad } from '../components/home/JourneyNICHyderabad';
import { Founders } from '../components/home/Founders';
import { FinalCTA } from '../components/home/FinalCTA';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSoftware }) => {
  return (
    <div className="space-y-0">
      <Hero onNavigate={onNavigate} onOpenSoftware={onOpenSoftware} />
      <SmallBusinesses onNavigate={onNavigate} onOpenSoftware={onOpenSoftware} />
      <BuiltAroundWork />
      <JourneyNICHyderabad />
      <Founders />
      <FinalCTA onNavigate={onNavigate} onOpenSoftware={onOpenSoftware} />
    </div>
  );
};
