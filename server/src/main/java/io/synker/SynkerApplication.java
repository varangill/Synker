package io.synker;

import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;
import io.synker.health.TemplateHealthCheck;
import io.synker.resources.HelloWorldResource;

public class SynkerApplication extends Application<SynkerConfiguration> {

    public static void main(final String[] args) throws Exception {
        System.out.println("Hello world");
        new SynkerApplication().run(args);
    }

    @Override
    public String getName() {
        return "Synker";
    }

    @Override
    public void initialize(final Bootstrap<SynkerConfiguration> bootstrap) {
        // TODO: application initialization
    }

    @Override
    public void run(final SynkerConfiguration configuration,
                    final Environment environment) {
        // TODO: implement application
        HelloWorldResource resource = new HelloWorldResource(
                configuration.getTemplate(),
                configuration.getDefaultName()
        );
        environment.jersey().register(resource);
        TemplateHealthCheck healthCheck = new TemplateHealthCheck(configuration.getTemplate());
        environment.healthChecks().register("template", healthCheck);
    }

}
