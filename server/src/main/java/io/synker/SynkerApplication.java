package io.synker;

import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;

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
    }

}
