import { useEffect, useMemo, useState } from 'react'

import iconDevlens from '../assets/images/logo-devlens.svg'
import iconStyleSpy from '../assets/images/logo-style-spy.svg'
import iconSpeedBoost from '../assets/images/logo-speed-boost.svg'
import iconJsonWizard from '../assets/images/logo-json-wizard.svg'
import iconTabMaster from '../assets/images/logo-tab-master-pro.svg'
import iconViewportBuddy from '../assets/images/logo-viewport-buddy.svg'
import iconMarkupNotes from '../assets/images/logo-markup-notes.svg'
import iconGridGuides from '../assets/images/logo-grid-guides.svg'
import iconPalettePicker from '../assets/images/logo-palette-picker.svg'
import iconLinkChecker from '../assets/images/logo-link-checker.svg'
import iconDomSnapshot from '../assets/images/logo-dom-snapshot.svg'
import iconConsolePlus from '../assets/images/logo-console-plus.svg'

function Content() {
  const [extensions, setExtensions] = useState([
    {
      logo: iconDevlens,
      name: 'DevLens',
      description:
        'Quickly inspect page layouts and visualize element boundaries.',
      isActive: true,
    },
    {
      logo: iconStyleSpy,
      name: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      isActive: true,
    },
    {
      logo: iconSpeedBoost,
      name: 'SpeedBoost',
      description:
        'Optimizes browser resource usage to accelerate page loading.',
      isActive: false,
    },
    {
      logo: iconJsonWizard,
      name: 'JSONWizard',
      description:
        'Formats, validates, and prettifies JSON responses in-browser.',
      isActive: true,
    },
    {
      logo: iconTabMaster,
      name: 'TabMaster Pro',
      description: 'Organizes browser tabs into groups and sessions.',
      isActive: true,
    },
    {
      logo: iconViewportBuddy,
      name: 'ViewportBuddy',
      description:
        'Simulates various screen resolutions directly within the browser.',
      isActive: false,
    },
    {
      logo: iconMarkupNotes,
      name: 'Markup Notes',
      description:
        'Enables annotation and notes directly onto webpages for collaborative debugging.',
      isActive: true,
    },
    {
      logo: iconGridGuides,
      name: 'GridGuides',
      description:
        'Overlay customizable grids and alignment guides on any webpage.',
      isActive: false,
    },
    {
      logo: iconPalettePicker,
      name: 'Palette Picker',
      description: 'Instantly extracts color palettes from any webpage.',
      isActive: true,
    },
    {
      logo: iconLinkChecker,
      name: 'LinkChecker',
      description: 'Scans and highlights broken links on any page.',
      isActive: true,
    },
    {
      logo: iconDomSnapshot,
      name: 'DOM Snapshot',
      description: 'Capture and export DOM structures quickly.',
      isActive: false,
    },
    {
      logo: iconConsolePlus,
      name: 'ConsolePlus',
      description:
        'Enhanced developer console with advanced filtering and logging.',
      isActive: true,
    },
  ])
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all')

  useEffect(() => {
    // Simulate fetching extensions from an API or local storage
    const fetchExtensions = async () => {
      setExtensions(extensions)
    }
    fetchExtensions()
  }, [extensions])

  const handleFilter = (filter: 'all' | 'active' | 'inactive') => {
    setFilter(filter)
  }

  const filteredExtensions = useMemo(
    () =>
      extensions.filter((extension) => {
        if (filter === 'all') return true
        if (filter === 'active') return extension.isActive
        if (filter === 'inactive') return !extension.isActive
        return false
      }),
    [extensions, filter]
  )

  // If no extensions match the filter, show a message

  if (extensions.length === 0) {
    return (
      <div className="dark:text-neutral-0 mb-150 text-center text-neutral-500">
        No extensions found
      </div>
    )
  }

  return (
    <>
      {/* Title & Filter Buttons */}
      <div className="mb-8 flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
        <h1 className="font-noto-sans mb-5 text-3xl font-bold text-neutral-800 md:mb-0 dark:text-neutral-100">
          Extensions List
        </h1>

        <div className="flex w-full max-w-2xl items-center justify-around px-4 md:max-w-xs md:px-0">
          <FilterButton
            label="All"
            isSelected={filter === 'all'}
            onClick={() => {
              handleFilter('all')
            }}
          />
          <FilterButton
            label="Active"
            isSelected={filter === 'active'}
            onClick={() => {
              handleFilter('active')
            }}
          />
          <FilterButton
            label="Inactive"
            isSelected={filter === 'inactive'}
            onClick={() => {
              handleFilter('inactive')
            }}
          />
        </div>
      </div>

      {/* Extensions */}
      <div className="mb-6 w-full md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {filteredExtensions.map((extension) => (
          <Extension
            key={extension.name}
            name={extension.name}
            description={extension.description}
            iconPath={extension.logo}
            isActive={extension.isActive}
            onToggle={() => {
              setExtensions((prev) =>
                prev.map((ext) =>
                  ext.name === extension.name
                    ? { ...ext, isActive: !ext.isActive }
                    : ext
                )
              )
            }}
            onRemove={() => {
              setExtensions((prev) =>
                prev.filter((ext) => ext.name !== extension.name)
              )
            }}
          />
        ))}
      </div>

      <div className="mb-5 text-center text-sm text-neutral-500">
        {extensions.length} extensions found
      </div>

      <div className="mb-10 text-center text-sm text-neutral-500">
        {'Manage your browser extensions efficiently :)'}
      </div>
    </>
  )
}

function FilterButton({
  label,
  isSelected,
  onClick,
}: {
  label: string
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <button
      className={`${isSelected ? 'border-nred-700 bg-nred-700 text-neutral-0 dark:border-nred-400 dark:bg-nred-400 hover:bg-nred-400 hover:border-nred-400 hover:text-neutral-0 dark:hover:bg-nred-500 dark:hover:border-nred-500 dark:font-medium dark:text-neutral-800 dark:hover:text-neutral-800' : 'bg-neutral-0 border-neutral-100 text-neutral-800 hover:border-neutral-200 hover:bg-gray-100 hover:text-neutral-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:border-neutral-600 dark:hover:bg-neutral-600 dark:hover:text-neutral-100'} font-noto-sans focus:outline-nred-400 flex cursor-pointer items-center rounded-3xl border-1 px-5 py-2 shadow-sm focus:outline-2 focus:outline-offset-2`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

function Extension({
  name,
  iconPath,
  description,
  isActive,
  onToggle,
  onRemove,
}: {
  name: string
  iconPath: string
  description: string
  isActive: boolean
  onToggle: () => void
  onRemove: () => void
}) {
  return (
    <div className="bg-neutral-0 font-noto-sans mb-3 flex w-full flex-col items-center rounded-2xl border-1 border-neutral-100 p-4 text-neutral-800 shadow-sm md:mb-0 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="mb-7 flex">
        <div className="mr-4 min-w-14">
          <img src={iconPath} alt={`${name} logo`} />
        </div>
        <div className="flex flex-col pr-8">
          <h2 className="font-bold">{name}</h2>
          <p className="h-15 pt-1 text-sm font-normal dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-3">
        <button
          onClick={onRemove}
          className="focus:outline-nred-700 focus:dark:outline-nred-400 hover:bg-nred-700 hover:border-nred-700 hover:text-neutral-0 dark:hover:bg-nred-600 dark:hover:bg-nred-400 cursor-pointer rounded-2xl border-1 border-neutral-300 px-4 py-1 focus:outline-2 focus:outline-offset-2 dark:border-neutral-600 dark:hover:border-neutral-900 dark:hover:text-neutral-900"
        >
          Remove
        </button>
        <button
          onClick={onToggle}
          className={`${isActive ? 'bg-nred-700 dark:bg-nred-400' : 'bg-neutral-400 dark:bg-neutral-400'} focus:outline-nred-400 hover:bg-nred-400 dark:hover:bg-nred-700 mb-1 flex h-5 w-9 cursor-pointer items-center justify-center rounded-full bg-neutral-300 transition-[background-color] delay-50 duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 dark:bg-neutral-400`}
        >
          <div
            className={`${isActive ? 'translate-x-2' : '-translate-x-2'} relative mx-[0.15rem] h-4 w-4 rounded-full bg-neutral-100 transition-transform delay-50 duration-300 ease-in-out`}
          ></div>
        </button>
      </div>
    </div>
  )
}

export default Content
