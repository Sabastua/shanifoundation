import React, { useState } from 'react';
import RibbonLabel from '../components/RibbonLabel';
import StoryCard from '../components/StoryCard';

export default function StoriesPage({ onOpenDonate }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stories', color: 'plum' },
    { id: 'menstrual-health', label: 'Menstrual Health', color: 'magenta' },
    { id: 'empowerment', label: 'Women & Youth Empowerment', color: 'gold' },
    { id: 'climate', label: 'Climate & Sustainability', color: 'green' },
    { id: 'education', label: 'Child Protection & Education', color: 'plum' },
  ];

  const stories = [
    {
      id: 1,
      category: 'Menstrual Health',
      categoryColor: 'magenta',
      filterKey: 'menstrual-health',
      title: 'Keeping Girls in the Classroom: Dignity in Kibera',
      excerpt: '[Add: Story excerpt about how access to menstrual hygiene packs and stigma-free workshops transformed school attendance for students in Nairobi].',
      imagePlaceholderText: '[Add: Photo of dignity kit distribution session]',
      date: '[Add: Date]',
      location: 'Nairobi, Kenya',
    },
    {
      id: 2,
      category: 'Climate & Sustainability',
      categoryColor: 'green',
      filterKey: 'climate',
      title: 'Greening Urban Spaces: Youth Tree Planting Initiative',
      excerpt: '[Add: Story excerpt highlighting youth environmental ambassadors establishing a school tree nursery and caring for indigenous seedlings].',
      imagePlaceholderText: '[Add: Photo of youth tree planting activity]',
      date: '[Add: Date]',
      location: 'Nairobi, Kenya',
    },
    {
      id: 3,
      category: 'Women & Youth Empowerment',
      categoryColor: 'gold',
      filterKey: 'empowerment',
      title: 'From Learners to Leaders: Mentoring Young Women',
      excerpt: '[Add: Story excerpt on our peer leadership cohort building vocational and digital skills to support household resilience].',
      imagePlaceholderText: '[Add: Photo of young women mentorship circle]',
      date: '[Add: Date]',
      location: 'Nairobi, Kenya',
    },
    {
      id: 4,
      category: 'Child Protection & Education',
      categoryColor: 'plum',
      filterKey: 'education',
      title: 'Creating Safe Spaces in Community Learning Centers',
      excerpt: '[Add: Story excerpt on training community teachers on safeguarding protocols and keeping vulnerable students protected].',
      imagePlaceholderText: '[Add: Photo of teacher safeguarding workshop]',
      date: '[Add: Date]',
      location: 'Nairobi, Kenya',
    },
    {
      id: 5,
      category: 'Menstrual Health',
      categoryColor: 'magenta',
      filterKey: 'menstrual-health',
      title: 'Breaking Silence: Boys Becoming Menstrual Health Allies',
      excerpt: '[Add: Story excerpt documenting how involving young male students in education circles dismantled playground stigma and fostered empathy].',
      imagePlaceholderText: '[Add: Photo of mixed-gender dialogue session]',
      date: '[Add: Date]',
      location: 'Nairobi, Kenya',
    },
    {
      id: 6,
      category: 'Climate & Sustainability',
      categoryColor: 'green',
      filterKey: 'climate',
      title: 'Seeds of Tomorrow: School-Led Indigenous Nurseries',
      excerpt: '[Add: Story excerpt showcasing primary school pupils adopting trees and learning ecological stewardship from an early age].',
      imagePlaceholderText: '[Add: Photo of school seedlings nursery]',
      date: '[Add: Date]',
      location: 'Nairobi, Kenya',
    },
  ];

  const filteredStories =
    selectedFilter === 'all'
      ? stories
      : stories.filter((s) => s.filterKey === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <RibbonLabel variant="magenta" className="mb-4">
          COMMUNITY DISPATCHES
        </RibbonLabel>
        <h1 className="font-serif font-bold text-plum-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Field Stories & Updates
        </h1>
        <p className="text-ink-600 text-base sm:text-lg mt-4 leading-relaxed">
          Witnessing change directly from Nairobi classrooms, informal settlement centers, and tree planting sites.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isSelected = selectedFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                isSelected
                  ? 'bg-plum-700 text-white shadow-xs'
                  : 'bg-cream-100 hover:bg-magenta-100 text-ink-700 hover:text-plum-900'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.map((story) => (
          <StoryCard
            key={story.id}
            category={story.category}
            categoryColor={story.categoryColor}
            title={story.title}
            excerpt={story.excerpt}
            imagePlaceholderText={story.imagePlaceholderText}
            date={story.date}
            location={story.location}
            onReadMore={() => {
              alert(`Placeholder story: "${story.title}". Full article content to be attached by client.`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
