module ScheduleGenerator
  class Generator < Jekyll::Generator
    safe true

    def generate(site)
      schedule_data = site.data['schedule'] || {}
      schedule_data.each do |term, sessions|
        site.pages << SchedulePage.new(site, site.source, term, sessions)
      end
    end
  end

  class SchedulePage < Jekyll::Page
    def initialize(site, base, term, sessions)
      @site = site
      @base = base
      @dir  = File.join('schedule', term)
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'schedule.html')
      self.data['term'] = term
      self.data['title'] = term.capitalize.gsub('-', ' ')
      self.data['sessions'] = sessions
    end
  end
end
